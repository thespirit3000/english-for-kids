export default class PrintUi {
  constructor(template) {
    this.template = template;
  }

  printHTML(node) {
    node.insertAdjacentHTML('beforeend', this.template);
  }
}
