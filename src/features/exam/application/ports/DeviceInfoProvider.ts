import type { DeviceInfo } from '../../domain/types/exam.types';

export interface DeviceInfoProvider {
  getDeviceInfo(): DeviceInfo;
}
