import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Dashboard from "../../components/dashboard";

import * as WidgetActions from "../../store/actions/widgetsAction";
import * as WidgetsAPI from "../../api/widgetsAPI";

import $ from "jquery";
// We need to expose jQuery as global variable
window.jQuery = window.$ = $;
require("bootstrap");

class Widgets extends Component {
	componentDidMount() {
		const { widgetActions } = this.props;
		let newWidgets = WidgetsAPI.GetWidgets();
		$(newWidgets).each((idx, widget) => {
			widgetActions.addWidget(widget);
		});
	}

	render() {
		return <Dashboard {...this.props} />;
	}
}

const mapStateToProps = (state) => {
	return {
		widgets: state.widgets,
		myWidgets: state.myWidgets,
		myWidgetsSetting: state.myWidgetsSetting,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		widgetActions: bindActionCreators(WidgetActions, dispatch),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);
