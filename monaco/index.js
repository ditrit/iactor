import {hclTokensProvider} from './hclTokensProvider.js';

if (typeof window === 'undefined') {

} else {
    window.hclTokensProvider = hclTokensProvider;
    if (window.Worker) {
        //var monWorker = new Worker('worker.js');
    }
}