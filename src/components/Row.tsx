import { ReactNode } from "react"
import { makeStyles, mergeClasses, tokens } from "@fluentui/react-components"

const useStyles = makeStyles({
  row: {
    display: "flex",
    alignItems: "center",
    minHeight: "2rem",
  },
  indented: {
    marginLeft: "1rem",
  },
  border: {
    borderTopWidth: "1px",
    borderTopColor: tokens.colorNeutralBackground4,
    borderTopStyle: "solid",
  },
  width: {
    minWidth: "4rem",
    marginRight: "0.5rem",
  },
  header: {
    width: "100%",
  },
  bold: {
    fontWeight: "bold",
  },
  flexGrow: {
    flexGrow: 1,
    marginLeft: "0.25rem",
    marginRight: "0.25rem",
    marginTop: "0.2rem",
    marginBottom: "0.2rem",
  },
})

type RowProps = {
  indented?: boolean
  hasBorder?: boolean
  children: ReactNode
}

export const Row = (props: RowProps) => {
  const { indented, hasBorder, children } = props

  const styles = useStyles()

  return (
    <div
      className={mergeClasses(
        styles.row,
        indented && styles.indented,
        hasBorder && styles.border
      )}
    >
      {children}
    </div>
  )
}

type RowNameProps = {
  isHeader?: boolean
  isBold?: boolean
  children: ReactNode
}

export const RowName = (props: RowNameProps) => {
  const { isHeader, isBold, children } = props

  const styles = useStyles()

  return (
    <span
      className={mergeClasses(
        styles.width,
        isHeader && styles.header,
        isBold && styles.bold
      )}
    >
      {children}
    </span>
  )
}

type RowValueProps = {
  children: ReactNode
}

export const RowValue = (props: RowValueProps) => {
  const { children } = props

  const styles = useStyles()

  return <span className={mergeClasses(styles.flexGrow)}>{children}</span>
}
