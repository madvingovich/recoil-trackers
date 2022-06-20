import { StorageService } from '../../../services/StorageService'
import { TRACKERS_KEY } from '../constants'

export const trackersService = StorageService(TRACKERS_KEY, [])
