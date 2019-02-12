// import { MSALProvider } from './MSALProvider';
// import { MSALConfig } from "./MSALConfig";
import { IAuthProvider, LoginType } from './IAuthProvider';
import { EventDispatcher, EventHandler } from './EventHandler';
// import { WAMProvider } from './WAMProvider';
// import { TestAuthProvider } from './TestAuthProvider';

let _providers : IAuthProvider[] = [];

export module Providers {
    export function getAvailable()
    {
        for (let provider of _providers) {
            if (provider.isAvailable)
                return provider;
        }
        return null;
    }

    export function add(provider : IAuthProvider) {
        if (provider !== null) {
            _providers.push(provider);
            _eventDispatcher.fire( {} );
        }
    }

    // export function initWamProvider(clientId: string, authority?: string) {
    //     let provider = new WAMProvider(clientId, authority);
    //     _providers.push(provider);
    //     _eventDispatcher.fire( { } );
    // }

    // export function initWithFakeProvider() {
    //     initWithProvider(new TestAuthProvider());
    // }

    // export function initMSALProvider(config : MSALConfig) {
    //     initWithProvider(new MSALProvider(config));
    // }

    let _eventDispatcher = new EventDispatcher();

    export function onProvidersChanged(event : EventHandler<any>) {
        _eventDispatcher.register(event)
    }
}

export * from "./MSALConfig"
export * from "./MSALProvider"
export * from "./WAMProvider"
export * from "./IAuthProvider"
export * from "./GraphSDK"
export * from "./EventHandler"