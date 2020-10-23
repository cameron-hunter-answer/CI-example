/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type LoginPage = typeof import('./pages/Login.js');
type Dashboard = typeof import('./pages/Dashboard.js');
type ResembleHelper = import('codeceptjs-resemblehelper');
type MailSlurp = import('@codeceptjs/mailslurp-helper');

declare namespace CodeceptJS {
  interface SupportObject { I: CodeceptJS.I, LoginPage: LoginPage, Dashboard: Dashboard }
  interface CallbackOrder { [0]: CodeceptJS.I; [1]: LoginPage; [2]: Dashboard }
  interface Methods extends CodeceptJS.Playwright, ResembleHelper, MailSlurp {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
