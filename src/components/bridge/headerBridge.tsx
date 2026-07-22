"use server"

import TagsBridge from "../bridge/tagsBridge";
import HeaderTemplate from "../client/templates/layout/headerTemplate";


export default async function HeaderMiddle() {


    return (
        <HeaderTemplate>
            <TagsBridge/>
        </HeaderTemplate>
    );
}