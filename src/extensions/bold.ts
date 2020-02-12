import { Bold as TiptapBold } from 'tiptap-extensions';
import { MenuData } from 'tiptap';
import { MenuBtnView } from '../types';
import CommandButton from '../components/MenuCommands/CommandButton.vue';
import { t } from '../i18n/index';

export default class Bold extends TiptapBold implements MenuBtnView {
  menuBtnView ({ isActive, commands }: MenuData) {
    return {
      component: CommandButton,
      componentProps: {
        command: commands.bold,
        isActive: isActive.bold(),
        icon: 'bold',
        tooltip: t('editor.extensions.Bold.tooltip'),
      },
    };
  }
}
