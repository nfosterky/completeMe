export default class Node {
  constructor(name, node = null) {
    this.name = name;
    this.next = node;
  }
}
