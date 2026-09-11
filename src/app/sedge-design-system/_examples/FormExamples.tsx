"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Input from "../../../components/ui/Input";
import Textarea from "../../../components/ui/Textarea";
import Select from "../../../components/ui/Select";
import Checkbox from "../../../components/ui/Checkbox";
import Radio from "../../../components/ui/Radio";
import {
  FormField,
  FieldLabel,
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
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section style={{ maxWidth: 720 }}>
      <CodeBlock code={USAGE} className="mb-8" />

      <div className="form-demo-grid">
        <FormField>
          <FieldLabel htmlFor="email">Identify yourself</FieldLabel>
          <Input id="email" type="email" placeholder="you@example.com" />
        </FormField>

        <FormField>
          <FieldLabel htmlFor="password">Secret sauce</FieldLabel>
          <span className="password-wrapper">
            <Input id="password" type={showPassword ? "text" : "password"} />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </span>
        </FormField>

        <FormField>
          <FieldLabel htmlFor="rabbit-hole">Pick a rabbit hole</FieldLabel>
          <Select id="rabbit-hole" defaultValue="">
            <option value="" disabled>
              Down we go...
            </option>
            <option>Fonts with suspicious energy</option>
            <option>Pigeons</option>
            <option>Websites from 2007</option>
            <option>Objects that should be round</option>
          </Select>
        </FormField>

        <FormField>
          <FieldLabel htmlFor="message">Tell me everything</FieldLabel>
          <Textarea id="message" placeholder="Go Off..." />
        </FormField>

        <FormField>
          <FieldLabel>Energy</FieldLabel>
          <div className="form-demo-row">
            <Radio name="plan" id="plan-free" label="Chaotic" defaultChecked />
            <Radio name="plan" id="plan-pro" label="Cozy" />
          </div>
        </FormField>

        <Checkbox id="terms" label="I read the tiny words" />
      </div>
    </section>
  );
}
