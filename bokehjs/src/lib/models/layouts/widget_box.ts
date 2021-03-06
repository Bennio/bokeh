import {Column, ColumnView} from "./column"

export class WidgetBoxView extends ColumnView {
  model: WidgetBox
}

export namespace WidgetBox {
  export interface Attrs extends Column.Attrs {}

  export interface Props extends Column.Props {}
}

export interface WidgetBox extends Column.Attrs {}

export class WidgetBox extends Column {
  properties: WidgetBox.Props

  constructor(attrs?: Partial<WidgetBox.Attrs>) {
    super(attrs)
  }

  static initClass(): void {
    this.prototype.type = "WidgetBox"
    this.prototype.default_view = WidgetBoxView
  }
}
WidgetBox.initClass()
