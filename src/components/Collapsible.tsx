import { ReactNode, useState } from "react"
import { makeStyles, mergeClasses, tokens } from "@fluentui/react-components"
import { Button } from "@fluentui/react-components"
import {
  ChevronDown28Regular,
  ChevronDown28Filled,
  ChevronRight28Regular,
  ChevronRight28Filled,
  Table28Regular,
  Table28Filled,
  bundleIcon,
} from "@fluentui/react-icons"
import { Row, RowName } from "./Row"

const useStyles = makeStyles({
  background: {
    backgroundColor: tokens.colorNeutralBackground4,
  },
  open: {
    fontStyle: "italic",
  },
})

interface CollapsibleProps {
  header: string
  isPrimary?: boolean
  onInsertClick?: Function
  open?: boolean
  indentation: number
  children: ReactNode
}

const ChevronDownIcon = bundleIcon(ChevronDown28Regular, ChevronDown28Filled)
const ChevronRightIcon = bundleIcon(ChevronRight28Regular, ChevronRight28Filled)
const TableIcon = bundleIcon(Table28Regular, Table28Filled)

export const Collapsible = (props: CollapsibleProps) => {
  const { header, isPrimary, onInsertClick, open, indentation, children } =
    props

  const styles = useStyles()

  const [isOpen, setIsOpen] = useState(open)

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div>
      <div
        className={mergeClasses(
          isPrimary && styles.background,
          isOpen && styles.open
        )}
        style={{ marginLeft: `${indentation}rem` }}
      >
        <Row hasBorder={isPrimary ? false : true}>
          <Button
            icon={!isOpen ? <ChevronRightIcon /> : <ChevronDownIcon />}
            appearance="transparent"
            onClick={toggleOpen}
          />

          <RowName isHeader>{header}</RowName>

          {onInsertClick && (
            <Button
              icon={<TableIcon />}
              onClick={() => onInsertClick()}
              appearance="transparent"
            />
          )}
        </Row>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  )
}
