import Node from './Node'

export default class LinkedList {
  constructor (name = null) {
    // container for all of our data
    // console.log(name);
    this.head = name ? new Node(name) : null
  }

  // this should add a node to the end of the list
  push (name) {
    var node = new Node(name);
    var lastNode;

    if (this.head === null) {
      this.head = node;
      return;
    }

    lastNode = this.findLastNode();
    lastNode.next = node;
  }

  findLastNode () {
    var currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  // this should remove and return the last item from the list
  pop () {
    var currentNode = this.head;
    var previous;

    if (!this.head) {
      return null;
    }

    while (currentNode.next) {
      previous = currentNode;
      currentNode = currentNode.next;
    }

    previous.next = null;

    return currentNode;
  }

  unshift (name) {
    var newNode = new Node(name);

    this.head = newNode;
    newNode.next = this.head;
  }

  shift () {
    var firstNode = this.head;

    if (this.head) {
      this.head = this.head.next;
    }

    return firstNode;
  }

  find (name) {
    var currentNode = this.head;

    if (currentNode.name === name) {
      return currentNode;
    }

    while (currentNode.next !== null) {
      currentNode = currentNode.next;

      if (currentNode.name === name) {
        return currentNode;
      }
    }

    return null;
  }

  contains (name) {
    return this.find(name) ? true : false;
  }

  insert (locationName, nameToInsert) {
    var nodeToInsert = new Node(nameToInsert);
    var locationNode = this.find(locationName);

    nodeToInsert.next = locationNode.next;
    locationNode.next = nodeToInsert;
  }

}
