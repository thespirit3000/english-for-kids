import PrintUi from './js/PrintUi';
import interfaceTemplate from './js/interface';
import eventHandler from './js/eventHandler';
import { renderCategoryMenu, renderSideMenu } from './js/render';

const initialize = () => {
  const header = new PrintUi(interfaceTemplate.header);
  const footer = new PrintUi(interfaceTemplate.footer);
  const main = new PrintUi(interfaceTemplate.main);
  const menu = new PrintUi(interfaceTemplate.side_panel);
  header.printHTML(document.body);
  main.printHTML(document.body);
  footer.printHTML(document.body);
  menu.printHTML(document.body);
  renderCategoryMenu();
  renderSideMenu();
  eventHandler();
};

const unloadWindow = () => {
};

window.onload = initialize;
window.onbeforeunload = unloadWindow;
