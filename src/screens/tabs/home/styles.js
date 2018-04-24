import * as d from '../../../../Constants';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#EBEEF2'
  },
  centerHeaderStyle: {
    fontSize: 20,
    fontWeight: '700'
  },
  avaView: {
    paddingRight: 10 * d.width,
    flex: 1
  },
  avaStyle: {
    height: 50 * d.height,
    width: 50 * d.width,
    borderRadius: 25
  },
  postView: {
    // marginRight: 10,
    paddingRight: 10 * d.width,
    flex: 6
  },
  infoView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  attachmentView: {
    marginTop: 12 * d.height,
    marginBottom: 7 * d.height
  },
  reactView: {
    flexDirection: 'row'
  },
  reactIconStyle: {
    width: 16 * d.width,
    height: 16 * d.height,
    marginRight: 5 * d.width
  }
};

export default styles;
