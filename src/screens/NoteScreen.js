import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { newNote } from '../actions/actions';

const mapStateToProps = state =>
{
  return {};
};

const mapDispatchToProps = dispatch =>
{
  return {
    makeNewNote: note => dispatch( newNote( note ) ),
  };
};

class NoteScreen extends React.Component
{
  constructor ( props )
  {
    super( props );
    // this.state = {
    //   title: "",
    //   body: ""
    // }
  }

  // onComplete ()
  // {
  //   const newNote = { title: this.state.title, body: this.state.body }
  //   this.props.makeNewNote( newNote );
  // }

  render ()
  {
    return (
      <SafeAreaView>
        <Text>NoteScreen</Text>
        {/* <Text>제목</Text>
        <TextInput value={ this.state.title } onChangeText={ ( text ) => { this.setState( { title: text } ) } } />
        <Text>내용</Text>
        <TextInput value={ this.state.body } onChangeText={ ( text ) => { this.setState( { body: text } ) } } />
        <TouchableOpacity onPress={ () => { this.onComplete() } }>
          <Text>제출</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={ () =>
          {
            this.props.navigation.goBack();
          } }
        >
          <Text>Back to Main</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( NoteScreen );
