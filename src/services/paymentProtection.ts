// // src/services/paymentProtection.ts

// export interface StatusResponse {
//   active: boolean;
//   clients?: Record<string, {
//     active: boolean;
//     paymentDue: string;
//     gracePeriod: number;
//     message: string;
//   }>;
//   globalMessage: string;
//   lastUpdated: string;
// }

// class PaymentProtectionService {
//   // Point at your JSON status file
//   private static readonly STATUS_URL =
//     'https://raw.githubusercontent.com/AshwetKini/infosiya-status/main/status.json';
//   private static readonly CLIENT_ID = 'INFOSIYA_2025';
//   private static readonly CACHE_KEY = 'infosiya_status_cache';
//   private static readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

//   static async checkStatus(): Promise<boolean> {
//     try {
//       // DEBUG: clear cache to force fresh fetch
//       localStorage.removeItem(this.CACHE_KEY);

//       // Fetch status.json with cache buster
//       const res = await fetch(this.STATUS_URL + '?t=' + Date.now(), {
//         cache: 'no-cache'
//       });
//       console.log('Fetch HTTP status:', res.status);

//       if (!res.ok) {
//         console.warn('Status fetch failed, allowing site access');
//         return true;  // Allow on HTTP error
//       }

//       const data: StatusResponse = await res.json();
//       console.log('Status JSON:', data);

//       // 1) Global flag
//       if (data.active === false) {
//         console.log('Global inactive → suspending');
//         return false;
//       }

//       // 2) Client-specific flag
//       const client = data.clients?.[this.CLIENT_ID];
//       if (client) {
//         if (client.active === false) {
//           console.log('Client inactive → suspending');
//           return false;
//         }

//         // 3) Payment due + grace period
//         if (client.paymentDue) {
//           const due = new Date(client.paymentDue);
//           const graceEnd = new Date(due.getTime() + client.gracePeriod * 86400000);
//           if (Date.now() > graceEnd.getTime()) {
//             console.log('Beyond grace period → suspending');
//             return false;
//           }
//         }
//       }

//       // 4) All checks passed
//       console.log('All checks passed → allowing');
//       return true;

//     } catch (e) {
//       console.error('Error in checkStatus, allowing site access', e);
//       return true;  // Allow on any exception
//     }
//   }

//   static getCachedStatus(): { isActive: boolean; timestamp: number } | null {
//     try {
//       return JSON.parse(localStorage.getItem(this.CACHE_KEY) || 'null');
//     } catch {
//       return null;
//     }
//   }

//   static setCachedStatus(isActive: boolean) {
//     try {
//       localStorage.setItem(
//         this.CACHE_KEY,
//         JSON.stringify({ isActive, timestamp: Date.now() })
//       );
//     } catch {
//       // ignore
//     }
//   }
// }

// export default PaymentProtectionService;

// src/services/paymentProtection.ts

export interface StatusResponse {
  active: boolean;
  clients?: Record<string, {
    active: boolean;
    paymentDue: string;
    gracePeriod: number;
    message: string;
  }>;
  globalMessage: string;
  lastUpdated: string;
}

class PaymentProtectionService {
  private static readonly STATUS_URL =
    'https://raw.githubusercontent.com/AshwetKini/infosiya-status/main/status.json';
  private static readonly CLIENT_ID = 'INFOSIYA_2025';

  /** 
   * Returns true *only* if status.active===true
   * and client.active===true and within grace-period.
   * Otherwise always false.
   */
  static async checkStatus(): Promise<boolean> {
    try {
      // Always fetch the latest, no caching anywhere
      const res = await fetch(this.STATUS_URL + '?t=' + Date.now(), {
        cache: 'no-cache'
      });
      console.log('Fetch HTTP status:', res.status);

      // If we cannot fetch, treat as SUSPEND (fail-closed)
      if (!res.ok) {
        console.warn('Status fetch failed → suspending site');
        return false;
      }

      const data: StatusResponse = await res.json();
      console.log('Fetched status JSON:', data);

      // 1) Must have global active=true
      if (data.active !== true) {
        console.log('Global active!==true → suspending');
        return false;
      }

      // 2) If there is a client record, it too must be active===true
      const client = data.clients?.[this.CLIENT_ID];
      if (client) {
        if (client.active !== true) {
          console.log('Client.active!==true → suspending');
          return false;
        }

        // 3) Payment due + grace-period check
        if (client.paymentDue) {
          const due = new Date(client.paymentDue);
          const graceEnd = new Date(due.getTime() + client.gracePeriod * 86400000);
          if (Date.now() > graceEnd.getTime()) {
            console.log('Past grace period → suspending');
            return false;
          }
        }
      }

      // All checks passed → allow
      console.log('All checks passed → allowing');
      return true;

    } catch (error) {
      console.error('Unexpected error → suspending', error);
      return false;  // fail-closed
    }
  }
}

export default PaymentProtectionService;
