import { Aurora } from './Aurora';

export const $$ = (window.$$ = (() => (selector) => new Aurora(selector))());
