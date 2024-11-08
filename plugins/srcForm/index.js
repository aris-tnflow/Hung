import loadComponents from './components'
import loadBlocks from './blocks'
import en from './locale/en'

export default (editor, opts = {}) => {
  const options = {
    label: 'Silder',
    name: 'Silder',
    category: "Basic",
    media: `
    <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 218.207 218.207" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M214.31,27.276H3.897C1.743,27.276,0,29.019,0,31.172v27.276v77.931v50.655c0,2.154,1.743,3.897,3.897,3.897H214.31 c2.154,0,3.897-1.743,3.897-3.897v-50.655V58.448V31.172C218.207,29.019,216.464,27.276,214.31,27.276z M7.793,62.345h35.069 v70.138H7.793V62.345z M210.414,132.483h-11.69V62.345h11.69V132.483z M210.414,54.552h-15.586c-2.154,0-3.897,1.743-3.897,3.897 v77.931c0,2.154,1.743,3.897,3.897,3.897h15.586v42.862H7.793v-0.001v-42.862h38.966c2.154,0,3.897-1.743,3.897-3.897V58.448 c0-2.154-1.743-3.897-3.897-3.897H7.793V35.069h202.621V54.552z"></path> <circle cx="113" cy="163.655" r="7.793"></circle> <path d="M66.241,140.277h109.103c2.154,0,3.897-1.743,3.897-3.897V58.448c0-2.153-1.743-3.896-3.896-3.896H66.241 c-2.154,0-3.897,1.743-3.897,3.897v77.931C62.344,138.534,64.087,140.277,66.241,140.277z M70.138,62.345h101.31v70.138H70.138 V62.345z"></path> <rect x="66.241" y="159.759" width="11.69" height="7.793"></rect> <rect x="85.724" y="159.759" width="11.69" height="7.793"></rect> <rect x="128.586" y="159.759" width="11.69" height="7.793"></rect> <rect x="148.069" y="159.759" width="11.69" height="7.793"></rect> </g> </g> </g> </g></svg>
    `,
  };

  for (let name in options) {
    if (!(name in opts)) opts[name] = options[name]
  }

  loadBlocks(editor, options)
  loadComponents(editor, options)

  editor.I18n && editor.I18n.addMessages({
    en,
    ...options.i18n,
  });
}
