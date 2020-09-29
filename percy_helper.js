const { Helper } = codeceptjs;
const { percySnapshot } = require('@percy/protractor')


class Percy extends Helper {


  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
  async takePercySnapshot(snapshotName) {
    console.log('Method has run');
    await this.helpers['Protractor'].percySnapshot(snapshotName)
  }

}

module.exports = Percy;
