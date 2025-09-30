declare namespace JSX {
  interface IntrinsicElements {
    'wistia-player': {
      'media-id': string;
      aspect?: string;
      [key: string]: any;
    };
  }
}