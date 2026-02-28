import type { DeviceInfoProvider } from '../../application/ports/DeviceInfoProvider';

const getBrowserName = (): string => {
  const userAgent = navigator.userAgent;

  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('SamsungBrowser')) return 'Samsung Internet';
  if (userAgent.includes('Opera') || userAgent.includes('OPR')) return 'Opera';
  if (userAgent.includes('Trident')) return 'Internet Explorer';
  if (userAgent.includes('Edge')) return 'Edge (Legacy)';
  if (userAgent.includes('Edg')) return 'Edge';
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Safari')) return 'Safari';

  return 'Unknown';
};

const getBrowserVersion = (): string => {
  const match = navigator.userAgent.match(/(firefox|chrome|safari|opera|edge|edg)\/?\s*(\d+)/i);
  return match ? match[2] : 'Unknown';
};

const getOS = (): string => {
  const userAgent = navigator.userAgent;

  if (userAgent.includes('Win')) return 'Windows';
  if (userAgent.includes('Mac')) return 'MacOS';
  if (userAgent.includes('Linux')) return 'Linux';
  if (userAgent.includes('Android')) return 'Android';
  if (userAgent.includes('like Mac')) return 'iOS';

  return navigator.platform || 'Unknown';
};

export class BrowserDeviceInfoProvider implements DeviceInfoProvider {
  getDeviceInfo() {
    const width = window.innerWidth;
    const userAgent = navigator.userAgent.toLowerCase();
    const touchNavigator = navigator as Navigator & { msMaxTouchPoints?: number };

    let deviceType: 'desktop' | 'tablet' | 'mobile' = 'desktop';

    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
      deviceType = 'tablet';
    } else if (/mobile|android|iphone|ipod|blackberry|windows phone/i.test(userAgent) || width <= 768) {
      deviceType = 'mobile';
    } else if (width <= 1024) {
      deviceType = 'tablet';
    }

    return {
      deviceType,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0 || (touchNavigator.msMaxTouchPoints ?? 0) > 0,
      browserName: getBrowserName(),
      browserVersion: getBrowserVersion(),
      os: getOS(),
    };
  }
}
