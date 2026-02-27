// utils/deviceDetection.ts

import type { DeviceInfo } from '../types';

/**
 * Detecta el tipo de dispositivo basado en el ancho de pantalla y user agent
 */
export const detectDeviceType = (): 'desktop' | 'tablet' | 'mobile' => {
  const width = window.innerWidth;
  const userAgent = navigator.userAgent.toLowerCase();
  
  // Detectar por user agent primero (más confiable para tablets)
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
    return 'tablet';
  }
  
  if (/mobile|android|iphone|ipod|blackberry|windows phone/i.test(userAgent)) {
    return 'mobile';
  }
  
  // Detectar por ancho de pantalla
  if (width <= 768) {
    return 'mobile';
  } else if (width <= 1024) {
    return 'tablet';
  }
  
  return 'desktop';
};

/**
 * Detecta si el dispositivo tiene capacidades táctiles
 */
export const isTouchDevice = (): boolean => {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    (navigator as any).msMaxTouchPoints > 0
  );
};

/**
 * Obtiene el nombre del navegador
 */
export const getBrowserName = (): string => {
  const userAgent = navigator.userAgent;
  
  if (userAgent.indexOf('Firefox') > -1) {
    return 'Firefox';
  } else if (userAgent.indexOf('SamsungBrowser') > -1) {
    return 'Samsung Internet';
  } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
    return 'Opera';
  } else if (userAgent.indexOf('Trident') > -1) {
    return 'Internet Explorer';
  } else if (userAgent.indexOf('Edge') > -1) {
    return 'Edge (Legacy)';
  } else if (userAgent.indexOf('Edg') > -1) {
    return 'Edge';
  } else if (userAgent.indexOf('Chrome') > -1) {
    return 'Chrome';
  } else if (userAgent.indexOf('Safari') > -1) {
    return 'Safari';
  }
  
  return 'Unknown';
};

/**
 * Obtiene la versión del navegador
 */
export const getBrowserVersion = (): string => {
  const userAgent = navigator.userAgent;
  let match = userAgent.match(/(firefox|chrome|safari|opera|edge|edg)\/?\s*(\d+)/i);
  
  if (match) {
    return match[2];
  }
  
  return 'Unknown';
};

/**
 * Detecta el sistema operativo
 */
export const getOS = (): string => {
  const userAgent = navigator.userAgent;
  const platform = navigator.platform;
  
  if (userAgent.indexOf('Win') > -1) return 'Windows';
  if (userAgent.indexOf('Mac') > -1) return 'MacOS';
  if (userAgent.indexOf('Linux') > -1) return 'Linux';
  if (userAgent.indexOf('Android') > -1) return 'Android';
  if (userAgent.indexOf('like Mac') > -1) return 'iOS';
  
  return platform || 'Unknown';
};

/**
 * Obtiene toda la información del dispositivo
 */
export const getDeviceInfo = (): DeviceInfo => {
  return {
    deviceType: detectDeviceType(),
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    isTouchDevice: isTouchDevice(),
    browserName: getBrowserName(),
    browserVersion: getBrowserVersion(),
    os: getOS()
  };
};

/**
 * Obtiene una descripción legible del dispositivo
 */
export const getDeviceDescription = (deviceInfo: DeviceInfo): string => {
  const { deviceType, browserName, browserVersion, os, screenWidth, screenHeight } = deviceInfo;
  
  return `${deviceType.charAt(0).toUpperCase() + deviceType.slice(1)} - ${browserName} ${browserVersion} en ${os} (${screenWidth}x${screenHeight})`;
};

/**
 * Log de información del dispositivo (útil para debugging)
 */
export const logDeviceInfo = (deviceInfo: DeviceInfo): void => {
  console.log('📱 Información del Dispositivo:');
  console.log('  Tipo:', deviceInfo.deviceType);
  console.log('  Pantalla:', `${deviceInfo.screenWidth}x${deviceInfo.screenHeight}`);
  console.log('  Táctil:', deviceInfo.isTouchDevice ? 'Sí' : 'No');
  console.log('  Navegador:', `${deviceInfo.browserName} ${deviceInfo.browserVersion}`);
  console.log('  OS:', deviceInfo.os);
  console.log('  Platform:', deviceInfo.platform);
  console.log('  User Agent:', deviceInfo.userAgent);
};
