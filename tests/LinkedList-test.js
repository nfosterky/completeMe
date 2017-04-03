import { expect } from 'chai';
import LinkedList from '../scripts/LinkedList'
import Node from '../scripts/Node'
require('locus')


describe('LinkedList', () => {
  it('should have a property head which is an instance of Node', () => {
    var linkedList = new LinkedList('Lady Octopus');

    expect(linkedList.head).to.deep.equal(new Node('Lady Octopus'));
  })

  it('should be able to push nodes onto list', () => {
    var linkedList = new LinkedList('Doctor Octopus');

    linkedList.push('Lady Octopus')

    expect(linkedList.head.name).to.equal('Doctor Octopus');
    expect(linkedList.head.next.name).to.equal('Lady Octopus');
  })

  it('should be able to find last node', () => {
    var linkedList = new LinkedList('Doctor Octopus');

    linkedList.push('Lady Octopus')
    linkedList.push('Mysterio')

    var lastNode = linkedList.findLastNode()

    expect(lastNode.name).to.equal('Mysterio');
    expect(lastNode.next).to.equal(null);
  })

  it('should be able to pop last node off of list', () => {
    var linkedList = new LinkedList('Doctor Octopus');

    linkedList.push('Lady Octopus')
    linkedList.push('Mysterio')

    var poppedNode = linkedList.pop()
    var lastNode = linkedList.findLastNode()

    expect(poppedNode.name).to.equal('Mysterio');
    expect(lastNode.name).to.equal('Lady Octopus');
    expect(lastNode.next).to.equal(null);
  })

  it('should be able to add items to front / head of list (unshift)', () => {
    var linkedList = new LinkedList('Doctor Octopus');

    linkedList.push('Lady Octopus')
    linkedList.push('Mysterio')
    linkedList.unshift('Green Goblin')

    expect(linkedList.head.name).to.equal('Green Goblin');
  })

  it('should be able to remove items from front / head of list (shift)', () => {
    var linkedList = new LinkedList('Doctor Octopus');

    linkedList.push('Lady Octopus')

    var shiftedNode = linkedList.shift();

    expect(shiftedNode.name).to.equal('Doctor Octopus');
    expect(linkedList.head.name).to.equal('Lady Octopus');
  })

  it('should be able find an item in list', () => {
    var linkedList = new LinkedList('Doctor Octopus');

    linkedList.push('Lady Octopus')
    linkedList.push('Mysterio')
    linkedList.push('Vulture')

    var foundNode = linkedList.find('Mysterio');

    expect(foundNode.name).to.equal('Mysterio');
    expect(foundNode.next.name).to.equal('Vulture');
  })

  it('should be able find the last item in list', () => {
    var linkedList = new LinkedList('Doctor Octopus');

    linkedList.push('Lady Octopus')
    linkedList.push('Mysterio')
    linkedList.push('Vulture')

    var foundNode = linkedList.find('Vulture');

    expect(foundNode.name).to.equal('Vulture');
    expect(foundNode.next).to.equal(null);
  })

  it('should be able find first item in list', () => {
    var linkedList = new LinkedList('Doctor Octopus');

    linkedList.push('Lady Octopus')
    linkedList.push('Mysterio')
    linkedList.push('Vulture')

    var foundNode = linkedList.find('Doctor Octopus');

    expect(foundNode.name).to.equal('Doctor Octopus');
    expect(foundNode.next.name).to.equal('Lady Octopus');
  })

  it('should be able check if item is in list', () => {
    var linkedList = new LinkedList('Doctor Octopus');

    linkedList.push('Lady Octopus')
    linkedList.push('Mysterio')
    linkedList.push('Vulture')

    var hasNode = linkedList.contains('Doctor Octopus');
    var hasNode2 = linkedList.contains('Doctor Doom');

    expect(hasNode).to.equal(true);
    expect(hasNode2).to.equal(false);
  })

  it('should be able to insert item in list after another item', () => {
    var linkedList = new LinkedList('Doctor Octopus');

    linkedList.push('Lady Octopus')
    linkedList.push('Mysterio')

    linkedList.insert('Lady Octopus', 'Vulture');

    var ladyOctopus = linkedList.find('Lady Octopus');

    expect(ladyOctopus.next.name).to.equal('Vulture');
    expect(ladyOctopus.next.next.name).to.equal('Mysterio');
  })


})
