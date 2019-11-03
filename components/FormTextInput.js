/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {useField} from 'formik';

export default function FormTextInput({fieldName, ...props}) {
  const [field, meta] = useField(fieldName);

  return (
    <View>
      <TextInput
        style={{borderBottomColor: 'gray', borderBottomWidth: 1}}
        value={field.value}
        onChangeText={field.onChange(fieldName)}
        onBlur={field.onBlur(fieldName)}
        {...props}
      />
      {meta.error && meta.touched && (
        <Text style={{color: 'red'}}>{meta.error}</Text>
      )}
    </View>
  );
}
