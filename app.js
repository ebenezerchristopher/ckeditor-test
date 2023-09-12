// app.js

import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import List from "@ckeditor/ckeditor5-list/src/list";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import SourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting";
import Link from "@ckeditor/ckeditor5-link/src/link";
import { LinkImage } from "@ckeditor/ckeditor5-link";
import CustomId from "./custom-id/src/customid";
import LinkDescription from "./link-description/src/link-description";
import CKEditorInspector from "@ckeditor/ckeditor5-inspector";
import {
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageInsert,
	ImageTextAlternative,
} from "@ckeditor/ckeditor5-image";
import { Base64UploadAdapter } from "@ckeditor/ckeditor5-upload";

ClassicEditor.create(document.querySelector("#editor"), {
	plugins: [
		Essentials,
		Paragraph,
		Heading,
		List,
		Bold,
		Italic,
		SourceEditing,
		Link,
		CustomId,
		LinkDescription,
		Image,
		ImageCaption,
		ImageResize,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		ImageInsert,
		ImageTextAlternative,
		LinkImage,
		Base64UploadAdapter,
	],
	toolbar: [
		"heading",
		"bold",
		"italic",
		"numberedList",
		"bulletedList",
		"sourceEditing",
		"link",
		"for-link",
		"imageUpload",
		"linkWithDescription",
	],
	image: {
		toolbar: [
			"imageStyle:block",
			"imageStyle:side",
			"|",
			"toggleImageCaption",
			"imageTextAlternative",
			"|",
			"linkImage",
		],
	},
})
	.then((editor) => {
		console.log("Editor was initialized", editor);
		CKEditorInspector.attach("editor", editor);
	})
	.catch((error) => {
		console.error(error.stack);
	});
