import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    notes: state.app_reducer.notes,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

class MainScreen extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <SafeAreaView>
        <Text>MainScreen</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate ('Note');
          }}
        >
          <Text>노트 추가</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (MainScreen);
