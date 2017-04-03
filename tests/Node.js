import { expect } from 'chai';
import Node from '../scripts/Node'

describe('Node', () => {
  it('should be create an instance of Node', () => {
    var node = new Node();

    expect(node).to.be.instanceOf(Node);
  })

  it('should have a name', () => {
    var node = new Node('Lady Octopus');

    expect(node.name).to.equal('Lady Octopus');
  })

  it('should have a property next that defaults to null', () => {
    var node = new Node('Lady Octopus');

    expect(node.next).to.equal(null);
  })

  it('should have a property next is a node', () => {
    var ladyOctopus = new Node('Lady Octopus');
    var doctorOctopus = new Node('Doctor Octopus', ladyOctopus);

    expect(doctorOctopus.next.name).to.equal('Lady Octopus');
  })


})
