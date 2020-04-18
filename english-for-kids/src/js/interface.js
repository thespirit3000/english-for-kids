export default {
  header: `
    <div class="header_section">
      <div class='wrapper'>
        <div class='header'>
          <button class="btn menu_btn open_menu"><i class="fa fa-bars open_menu"></i></button>
          <button class="btn game_btn hidden_opacity">Start game</i></button>
          <button class="btn repeat_btn hidden_opacity"><i class="fa fa-refresh rotate-card"></i></i></button>
          <label class="switch">
          <input class="switcher" type="checkbox">
          <span class="slider round">
          <span class="on">Game</span>
          </span>
          </label>
        </div>
      </div>
    </div>
  `,
  side_panel: `<div id="mainMenu" class="sidepanel">
  <button class="btn btn_close close_menu"><i class="fa fa-close close_menu"></i></button>
  <div class="sidemenu-item category active itemmain">Main menu</div>
  </div>`,
  main: `
    <div class="main_section">
      <div class="wrapper">
      <div class="main main-window">
      </div>
      </div> 
    </div> 
  `,
  footer: `
    <section class="footer_section">
      <div class='wrapper'>
        <div class="footer">
          <a href="mailto:thespirit3000@gmail.com">created by Dzianis Bogdan</>
        </div>
      </div>  
    </section>
  `,
};
