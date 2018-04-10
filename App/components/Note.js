import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity
} from 'react-native';

export default class Note extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>

         <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
            <Text style={styles.noteDeleteText}>Удалить</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        backgroundColor: '#9C3A3B',
        borderWidth:2,
        borderColor: '#511E1E',
        borderRadius:10,
        margin: 10
        
    },
    noteText: {
        color: 'white',
        fontSize:18
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#495156',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
        borderRadius:10
    },
    noteDeleteText: {
        color: 'white'
    }
});
