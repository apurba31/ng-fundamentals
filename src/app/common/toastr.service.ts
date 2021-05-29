import { InjectionToken } from '@angular/core'
//import { interface } from '@angular/core'

export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr')
export interface Toastr {
    success (msg: string, title?: string):void
    info (msg: string, title?: string):void
    warnings(msg: string, title?: string):void
    error(msg: string, title?: string):void
}