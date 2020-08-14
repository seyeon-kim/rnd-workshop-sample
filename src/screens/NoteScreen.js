import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {newNote} from '../actions/actions';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    makeNewNote: note => dispatch (newNote (note)),
  };
};

class NoteScreen extends React.Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <SafeAreaView>
        <Text>NoteScreen</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack ();
          }}
        >
          <Text>Back to Main</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (NoteScreen);
