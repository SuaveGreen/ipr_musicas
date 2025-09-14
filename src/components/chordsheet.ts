declare module "chordsheetjs" {
  export class ChordSheetParser {
    parse(text: string): any;
  }
  export class HtmlDivFormatter {
    format(song: any): string;
  }
}
