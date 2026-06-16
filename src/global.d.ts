import type { CSSProperties, DetailedHTMLProps, HTMLAttributes } from "react";

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'model-viewer': DetailedHTMLProps<HTMLAttributes<HTMLElement> & {
          src?: string;
          alt?: string;
          ar?: boolean;
          'ar-modes'?: string;
          'camera-controls'?: boolean;
          'auto-rotate'?: boolean;
          'shadow-intensity'?: string;
          'interaction-prompt'?: string;
          'auto-rotate-delay'?: string;
          'camera-orbit'?: string;
          'camera-target'?: string;
          'field-of-view'?: string;
          autoplay?: boolean;
          loading?: string;
          style?: CSSProperties;
        }, HTMLElement>;
      }
    }
  }
}
