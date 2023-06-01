{
  class DocumentItem {
    public text: string;
    private state: DocumentItemState;

    constructor() {
      this.setState(new DraftDocumentItemState());
    }

    public getState() {
      return this.state;
    }

    public setState(state: DocumentItemState) {
      this.state = state;
      this.state.setStateContext(this);
    }

    public publishDoc() {
      this.state.publish();
    }

    public deleteDoc() {
      this.state.delete();
    }
  }

  abstract class DocumentItemState {
    public name: string;
    public item: DocumentItem;

    public setStateContext(item: DocumentItem) {
      this.item = item;
    }

    public abstract publish(): void;

    public abstract delete(): void;
  }

  class DraftDocumentItemState extends DocumentItemState {
    constructor() {
      super();

      this.name = 'DraftDocumentItemState';
    }

    public publish(): void {
      console.log(`Text: ${this.item.text} has been sent successfully`);

      this.item.setState(new PublishDocumentItemState());
    }

    public delete(): void {
      console.log('Document has been deleted successfully');
    }
  }

  class PublishDocumentItemState extends DocumentItemState {
    constructor() {
      super();

      this.name = 'PublishDocumentItemState';
    }

    public publish(): void {
      console.log('You can not publish this document because this document has been published already.');
    }

    public delete(): void {
      console.log(`Text: ${this.item.text} has been deleted successfully`);

      this.item.setState(new DraftDocumentItemState());
    }
  }

  const item = new DocumentItem();

  item.text = 'Test post';
  console.log('item.getState()', item.getState());

  item.publishDoc(); // Publish method inside DraftDocumentItemState
  console.log('item.getState()', item.getState());

  item.publishDoc(); // Publish method inside PublishDocumentItemState
  console.log('item.getState()', item.getState());

  item.deleteDoc(); // Delete method inside PublishDocumentItemState
  console.log('item.getState()', item.getState());
}
