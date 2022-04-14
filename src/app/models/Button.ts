export interface IButton {
  class: 'button-standard' | 'button-small' | 'button-medium' | 'button-large' | 'button-squashed';
  text: string;
  link?: string;
  imgVisible: boolean
}
