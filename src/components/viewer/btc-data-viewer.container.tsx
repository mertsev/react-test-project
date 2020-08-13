import { connect } from 'react-redux';
import { State } from '../../reducers';
import { BtcDataViewerComponent } from './btc-data-viewer.component';

const mapStateToProps = (state: State) => ({
  btcPriceCollection: state.btcPriceCollection,
});

const mapDispatchToProps = (dispatch: (arg0: import("../../common").BaseAction) => any) => ({});

export const BtcDataViewerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BtcDataViewerComponent);
