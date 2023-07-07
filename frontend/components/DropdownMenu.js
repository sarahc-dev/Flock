import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View } from 'react-native'

const DropdownMenu = () => {
    const [selectedName, setSelectedName ] = useState('')

    const dropdownOptions = [
        { label: 'Sarah', value: 'Sarah' },
        { label: 'Verity', value: 'Verity' },
        { label: 'Evan', value: 'Evan' },
    ];
    
    console.log(selectedName)
    return (
        <View>
            <Picker 
            selectedValue={selectedName}
            onValueChange={(itemValue) => setSelectedName(itemValue)}>
            <Picker.Item label="Select an option..." value={null} />
                {dropdownOptions.map((option) => (
                    <Picker.Item
                      key={option.value}
                      label={option.label}
                      value={option.value}
                    />
                ))}
            </Picker>
        </View>
    )

}

export default DropdownMenu;
