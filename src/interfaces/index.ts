export interface CartProps {
  open: boolean;
}

export interface DividerProps {
  color?: string;
  margin?: string;
}

export interface ImgComponentProps {
  link: string;
  altText: string;
  banner?: boolean;
}

export interface ModalProps {
  btnText?: string;
  open?: boolean;
  onClose: () => void;
}

export interface PolicyTextProps {
  subhead: string;
  children: string;
}

export interface TextBlockProps {
  children: string | JSX.Element;
  header?: string;
  element?: string;
}
