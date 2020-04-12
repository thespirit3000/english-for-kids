import PrintUi from './js/PrintUi';
import interfaceTemplate from './js/interface';
import eventHandler from './js/eventHandler';

const initialize = () => {
  const header = new PrintUi(interfaceTemplate.header);
  const footer = new PrintUi(interfaceTemplate.footer);
  header.printHTML(document.body);
  footer.printHTML(document.body);
  eventHandler();
};

const unloadWindow = () => {
};

window.onload = initialize;
window.onbeforeunload = unloadWindow;
