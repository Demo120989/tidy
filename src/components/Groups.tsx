import { Collapsible } from "./Collapsible"
import { Group } from "../classes/Group"
import { Statistics } from "./Statistics"
import { formatName } from "../functions/formatName"
import { insertTable } from "../functions/insertTable"

type GroupsProps = {
  data: Group[]
}

export const Groups = (props: GroupsProps) => {
  const { data } = props

  return (
    <>
      {data.map((x: Group) => {
        const statistics = x.statistics
        const groups = x.groups

        let canInsertTable = false
        if (groups) {
          canInsertTable =
            groups.filter((group) => "statistics" in group).length ==
            groups.length
        }

        return (
          <Collapsible
            key={x.identifier}
            open={false}
            header={formatName(x)}
            onInsertClick={canInsertTable ? () => insertTable(x) : undefined}
          >
            {statistics && <Statistics data={x.statistics!} />}
            {groups && <Groups data={groups} />}
          </Collapsible>
        )
      })}
    </>
  )
}
