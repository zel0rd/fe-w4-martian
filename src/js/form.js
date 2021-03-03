import { _ } from './util.js';

export const initFormContainer = ($formCont) => {
  return ({ title, btnContent, btnClass }) => {
    $formCont.appendChild(_.genEl('DIV', {
      classNames: ['title'],
      template: `${title}`,
    }));
    $formCont.appendChild(_.genEl('INPUT', {
      classNames: ['form'],
    }));
    $formCont.appendChild(_.genEl('BUTTON', {
      classNames: [btnClass],
      template: `${btnContent}`,
    }));
  }
}