import * as d from '../../../../Constants';

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  centerHeaderStyle: {
    fontSize: 20,
    fontWeight: '700'
  },
  centerHeaderView: {
    height: 78 * d.height,
    justifyContent: 'space-between'
  },
  centerHeaderChild: {
    height: 30 * d.height,
    width: 355 * d.height,
    borderWidth: 1,
    borderColor: '#1CABE9',
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#FFFFFF'
  },
  headerNotiView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10 * d.height
  },
  imageStyle: {
    width: 40 * d.width,
    height: 40 * d.height,
    borderRadius: 20
  },
  headerView: {
    backgroundColor: '#FFFFFF',
    paddingTop: 5 * d.height,
    paddingBottom: 5 * d.height
  },
  tabView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 177.5,
    flex: 0.5,
    alignContent: 'center'
  }
};

export default styles;
