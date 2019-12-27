import PropType from "prop-types"

export default {
    children: PropType.node,
    GroupDatas: PropType.arrayOf(PropType.shape({
        value: PropType.string.isRequired,
        text: PropType.string.isRequired
    })),
    ChooseDatas: PropType.arrayOf(PropType.string),
    singleData: PropType.shape({
        value: PropType.string.isRequired,
        text: PropType.string.isRequired
    })
}