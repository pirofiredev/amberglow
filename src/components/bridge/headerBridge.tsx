"use server"

import HeaderTemplate from "../client/templates/layout/headerTemplate";
import TagsBridge from "../bridge/tagsBridge";


export default async function HeaderMiddle() {


    return (
        <HeaderTemplate>
            <TagsBridge/>
        </HeaderTemplate>
    );
}