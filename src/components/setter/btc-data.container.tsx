import { connect } from 'react-redux';
import { btcDataRequestStartAction } from '../../actions';
import { BtcDataComponent } from './btc-data.component';

const mapDispatchToProps = (dispatch: (arg0: import("../../common").BaseAction) => any) => ({
  onRequestNewNumber: () => dispatch(btcDataRequestStartAction()),
});

export const BtcDataContainer = connect(
  null,
  mapDispatchToProps
)(BtcDataComponent);
