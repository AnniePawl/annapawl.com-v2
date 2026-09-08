import Input from "../../../components/ui/Input";
import Textarea from "../../../components/ui/Textarea";
import Select from "../../../components/ui/Select";
import Checkbox from "../../../components/ui/Checkbox";
import Radio from "../../../components/ui/Radio";
import {
  FormField,
  FieldLabel,
  FieldHint,
  FieldError,
} from "../../../components/ui/FormField";
import CodeBlock from "../_components/CodeBlock";

const USAGE = `
import { FormField, FieldLabel, FieldHint } from "@/components/ui/FormField";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Checkbox from "@/components/ui/Checkbox";
import Radio from "@/components/ui/Radio";

<FormField>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" type="email" placeholder="you@example.com" />
  <FieldHint>We'll never share your email.</FieldHint>
</FormField>

<FormField>
  <FieldLabel htmlFor="role">Role</FieldLabel>
  <Select id="role">
    <option>Designer</option>
    <option>Engineer</option>
  </Select>
</FormField>

<Checkbox id="terms" label="I agree to the terms" />
<Radio name="plan" id="plan-free" label="Free" />
`;

export default function FormExamples() {
  return (
    <section style={{ maxWidth: 720 }}>
      <CodeBlock code={USAGE} className="mb-8" />

      <div className="form-demo-grid">
        <FormField>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="you@example.com" />
          <FieldHint>We&rsquo;ll never share your email.</FieldHint>
        </FormField>

        <FormField>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input id="password" type="password" error />
          <FieldError>Must be at least 8 characters.</FieldError>
        </FormField>

        <FormField>
          <FieldLabel htmlFor="role">Role</FieldLabel>
          <Select id="role" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Designer</option>
            <option>Engineer</option>
            <option>Design Engineer</option>
          </Select>
        </FormField>

        <FormField>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea id="message" placeholder="Say hello..." />
        </FormField>

        <FormField>
          <FieldLabel>Plan</FieldLabel>
          <div className="form-demo-row">
            <Radio name="plan" id="plan-free" label="Free" defaultChecked />
            <Radio name="plan" id="plan-pro" label="Pro" />
          </div>
        </FormField>

        <Checkbox id="terms" label="I agree to the terms" />
      </div>
    </section>
  );
}
