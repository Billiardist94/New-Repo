interface IDropdownStyles {
    dropdown: {
        width: number
    }
};

interface IDropdownOption {
    key: string
    text: string
    itemType?: any
    disabled?: boolean
}

const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: {
        width: 300,
    }
};

const options: IDropdownOption[] = [
    {key: 'fruitsHeader', text: 'Fruits'},
    {key: 'apple', text: 'Apple'},
    {key: 'banana', text: 'Banana', disabled: true},
];