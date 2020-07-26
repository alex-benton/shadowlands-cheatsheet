import React from "react";
import fs from "fs";
import {buildClassData, ClassData} from "../../components/util";
import {CLASS_NAME_DEATHKNIGHT} from "../../components/constants";
import ClassPage from "../../components/widgets/ClassPage";

// the class name for this page.
//
// i initially tried to use nextjs dynamic routing to generate the class pages,
// but it didn't play well with static export + github pages. so, instead i'm
// making 12 near-identical class pages.
const CLASS_NAME = CLASS_NAME_DEATHKNIGHT;

/**
 * The class page.
 *
 * All the real work is done in the ClassPage component.
 */
const Deathknight = (props: ClassData) => <ClassPage {...props} />;
export default Deathknight;

/**
 * Get the static props for this class page.
 *
 * This is called at build time. The 'buildClassData' function loads data from the json files
 * located in the 'data/{classname}' directory.
 */
export const getStaticProps = async () => ({
    props: buildClassData(fs, CLASS_NAME)
});
