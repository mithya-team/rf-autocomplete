import { InputBaseComponentProps } from "@material-ui/core";
import { AutocompleteProps, AutocompleteRenderInputParams } from "@material-ui/lab/Autocomplete";
import { IFieldProps } from "react-forms";
export interface IHighlighterProps {
    highlightText?: boolean;
    highlightColor?: string;
    highlighterStyles?: object;
}
export interface TQueries<T> {
    term: string;
    sendAt: number;
    order: number;
    options?: T[];
}
export interface IMUIAutoCompleteProps<T> extends Partial<AutocompleteProps<T, boolean | undefined, boolean | undefined, boolean | undefined>> {
    options?: T[];
    renderInputProps?: AutocompleteRenderInputParams;
    inputProps?: InputBaseComponentProps;
    highlighterProps?: IHighlighterProps;
    getQueryResponse?: (newTerm: string) => Promise<Array<T>>;
    onItemSelected?: (value: string | T | NonNullable<T> | (string | T)[]) => void;
    multiple?: boolean;
    transformValues?: (values: any) => T | T[];
    clearOnSelect?: boolean;
}
export interface IProps<T> extends IFieldProps {
    fieldProps?: IMUIAutoCompleteProps<T>;
}
export declare const MUIAutocomplete: <T extends string | Record<string, any>>(props: IProps<T>) => JSX.Element;
