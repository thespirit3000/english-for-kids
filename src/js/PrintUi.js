export default class PrintUi {
  constructor() {
    this.header = `
    <section class=header_section>
      <div class='wrapper'>
        <div class='header'>
          <button class="btn menu_btn"><i class="fa fa-bars"></i></button>
          <label class="switch">
          <input class="switcher" type="checkbox">
          <span class="slider round"></span>
          </label>
        </div>
      </div>
    </section>
                    `;
  }
}
